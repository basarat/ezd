import * as React from 'react';
import * as types from '../types';
import { style, classes, cssRaw, media } from 'typestyle';
import * as csstips from 'csstips';
import * as styles from '../internal/styles';
import { highlightCodeWithMode, MarkDownStyles } from '../internal/markdown';
import { Expandible } from 'expandible';
import * as gls from './components/gls';
import { Toggle } from './components/toggle';
import * as icons from './components/icons';
import { Loader } from "./components/loader";
import { P } from "./components/txt";
import { IframeC2PResize } from './components/toc';


const heightStore = new class {
  get(iframeId: string) {
    return parseInt(localStorage.getItem('heightStore' + iframeId) || '1');
  }
  set(iframeId: string, height: number) {
    localStorage.setItem('heightStore' + iframeId, height.toString());
  }
}

export class HtmlRenderer extends React.PureComponent<types.HTMLContent, {}> {
  render() {
    const { props } = this;
    return <div dangerouslySetInnerHTML={{ __html: props.html }} />;
  }
}

export class CodeRenderer extends React.PureComponent<types.CodeContent, { viewCode: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      viewCode: !props.collapsed
    }
  }
  render() {
    const { props } = this;
    return <gls.VerticalMargined>
      {
        !!props.collapsed && <Toggle
          label="Show Code"
          value={this.state.viewCode}
          onChange={() => this.setState({ viewCode: !this.state.viewCode })} />
      }
      <Expandible open={this.state.viewCode}>
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
      </Expandible>
    </gls.VerticalMargined>;
  }
}

namespace AppRendererStyles {
  const borderColor = '#bbb'
  const topBorderHeight = 2;
  const bottomBorderHeight = 2;

  /** Keep centered with fixed widths */
  export const centerWidth = {
    position: 'relative' as 'relative',
    left: '50%',
    transform: 'translateX(-50%)'
  }

  export const iframe = style({
    display: 'block',

    /** Bit big border needed as mobile browsers have rendering issues with 1px */
    borderTop: `${topBorderHeight}px solid ${borderColor}`,
    borderBottom: `${bottomBorderHeight}px solid ${borderColor}`,
    borderLeft: `4px solid ${borderColor}`,
    borderRight: `2px solid ${borderColor}`,

    transition: 'width .2s, height .2s',
  });

  export const auto = style({
    width: '100%',
  });

  export const desktop = style(centerWidth, {
    width: '1200px',
  });

  export const tablet = style(centerWidth, {
    width: '768px',
  });

  export const mobile = style(centerWidth, {
    width: '320px',
  });

  /** Autosize the iframe to remove scroll bars http://stackoverflow.com/a/9976309/390330 */
  export function resizeIframe(frame: HTMLIFrameElement) {
    /** 
     * Without this we expand constantly slowly and slowly
     **/
    if (frame.style.height
      === frame.contentWindow.document.body.scrollHeight + 24 + 'px') {
      return;
    }
    /** Without the +borderHeight we still get scrollbars :-/ */
    frame.style.height = frame.contentWindow.document.body.scrollHeight + 24 + 'px';
  }
}

export type AppRensponsiveMode = 'auto' | 'desktop' | 'tablet' | 'mobile';
export class AppRenderer extends React.PureComponent<types.AppContent, { mode?: AppRensponsiveMode, viewCode?: boolean, loading?: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'auto',
      viewCode: false,
      loading: true,
    }
  }
  componentDidMount() {
    IframeC2PResize.on(({ iframeId, height }) => {
      if (iframeId === types.makeIframeId(this.props.index)) {
        this.ctrls.frame.style.height = height + 'px';
      }
    });
  }
  ctrls: {
    frame?: HTMLIFrameElement
  } = {}
  render() {
    const { props } = this;
    return <gls.VerticalMargined>

      <gls.ContentHorizontalMargined>
        {this.state.loading && <Loader />}
        <gls.Flex />
        <a target="_blank" href={`./${props.htmlFileName}`} title="Open demo in a new window"><icons.OpenExternal /></a>
      </gls.ContentHorizontalMargined>

      {/** iframe the html */}
      <iframe
        ref={(frame) => this.ctrls.frame = frame as HTMLIFrameElement}
        className={classes(
          AppRendererStyles.iframe,
          AppRendererStyles[this.state.mode],
          !!props.height && style({ height: props.height }),
          !!props.width && style(
            AppRendererStyles.centerWidth,
            {
              width: props.width,
            })
        )}
        src={`./${props.htmlFileName}`}
        onLoad={e => {
          if (!props.height) AppRendererStyles.resizeIframe(this.ctrls.frame);
          this.setState({ loading: false })
        }} />

      { /** Controls */}
      <gls.ResponsiveGridParent breakpoint={650}>
        {!this.props.width && <BreakpointButtons mode={this.state.mode} onModeChange={mode => {
          this.setState({ mode });
          setTimeout(() => {
            if (!props.height) AppRendererStyles.resizeIframe(this.ctrls.frame);
          }, 500);
        }} />}
        <gls.ContentHorizontalMargined className={style(media({ minWidth: 650 }, csstips.endJustified))}>
          {!!props.sourceUrl && <a target="_blank" href={props.sourceUrl} title="View Source"><icons.File /></a>}
        </gls.ContentHorizontalMargined>
      </gls.ResponsiveGridParent>

      {/** Code */}
      <Toggle
        label="Show Code"
        value={this.state.viewCode}
        onChange={() => this.setState({ viewCode: !this.state.viewCode, loading: !this.state.viewCode })} />
      <Expandible open={this.state.viewCode}>
        {/** Render code in same dom structure as markdown would. To reuse styles */}
        <div className={MarkDownStyles.rootClass}>
          <pre className={style({ margin: '0px' })}>
            <code dangerouslySetInnerHTML={{ __html: highlightCodeWithMode(props.sources[0]) }} />
          </pre>
        </div>
      </Expandible>

    </gls.VerticalMargined>;
  }
}

export namespace StoryRendererStyles {
  export const iframe = style({
    display: 'block',
    border: 'none',

    /** 100% width on ios http://stackoverflow.com/a/20142280/390330 */
    width: 1,
    minWidth: '100%',

    transition: 'height .2s',
    height: '10px',
  });
}

export class StoryRenderer extends React.PureComponent<types.StoryContent, { loading: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }
  componentDidMount() {
    const selfFrameId = types.makeIframeId(this.props.index);
    this.ctrls.frame.style.height = heightStore.get(selfFrameId) + 'px';
    IframeC2PResize.on(({ iframeId, height }) => {
      if (iframeId === selfFrameId) {
        this.setState({ loading: false });
        this.ctrls.frame.style.height = height + 'px';
        heightStore.set(selfFrameId, height);
      }
    });
  }
  ctrls: {
    frame?: HTMLIFrameElement
  } = {}
  render() {
    const { props } = this;
    return <gls.VerticalMargined>

      <gls.ContentHorizontal>
        {this.state.loading && <gls.ContentHorizontalMarginedCentered>
          <Loader />
          <P>
            Story rendering
          </P>
        </gls.ContentHorizontalMarginedCentered>}

        <gls.Flex />

        <a target="_blank"
          href={`./${props.htmlFileName}`}
          title="Open story in a new window">
          <icons.OpenExternal />
        </a>
      </gls.ContentHorizontal>

      {/** iframe the html */}
      <iframe
        id={types.makeIframeId(props.index)}
        /** 100% width on ios http://stackoverflow.com/a/20142280/390330 */
        scrolling="no"
        ref={(frame) => this.ctrls.frame = frame as HTMLIFrameElement}
        className={classes(
          StoryRendererStyles.iframe,
        )}
        src={`./${props.htmlFileName}`}
        onLoad={e => {
        }} />
    </gls.VerticalMargined>;
  }
}


class BreakpointButtons extends React.PureComponent<{ mode: AppRensponsiveMode, onModeChange: (mode: AppRensponsiveMode) => void }, {}>{
  render() {

    const containerClass = style({
      display: 'inline-block',
      border: '2px solid #ccc',
      borderRadius: '13px',
      $nest: {
        '&>*': {
          border: 'none',
          borderRadius: '13px',
          backgroundColor: 'white',
          transition: 'background-color .2s, color .2s',
          color: styles.colors.text
        },
        '&>*:focus': {
          outline: 'none',
        },
        '&>*:hover': {
          color: '#999',
        },
        '&>*:first-child': {
          borderLeft: '2px solid #ccc !important'
        },
        '&>*:last-child': {
          borderRight: '2px solid #ccc !important'
        },
      }
    });

    const selectedClass = style({
      backgroundColor: '#ccc',
      $nest: {
        '&:hover': {
          color: 'white'
        }
      }
    })

    return <div className={containerClass}>
      <button className={classes(this.props.mode === 'auto' && selectedClass)} onClick={() => this.props.onModeChange('auto')}>Auto</button>
      <button className={classes(this.props.mode === 'desktop' && selectedClass)} onClick={() => this.props.onModeChange('desktop')}>1200</button>
      <button className={classes(this.props.mode === 'tablet' && selectedClass)} onClick={() => this.props.onModeChange('tablet')}>768</button>
      <button className={classes(this.props.mode === 'mobile' && selectedClass)} onClick={() => this.props.onModeChange('mobile')}>320</button>
    </div>;
  }
}
