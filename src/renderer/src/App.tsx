import styled from '@emotion/styled'
import icons from './assets/icons.svg'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 840px;
  margin: 0 auto;
  padding: 15px 30px 0 30px;
`

const Svg = styled.svg`
  margin-top: -0.4rem;
  transition: all 0.3s;
`

const HeroText = styled.h2`
  font-weight: 400;
  color: #c2f5ff;
  text-align: center;
  margin-top: -0.5rem;
  margin-bottom: 10px;
`

const HeroTagline = styled.p`
  text-align: center;
  margin-bottom: 14px;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 500;

  .links-item {
    padding: 0 4px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    line-height: 32px;

    .links .link-dot {
      display: none;
    }

    .features .feature-item {
      width: 100%;
    }
  }
`

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -6px;

  & .feature-item {
    width: 33.33%;
    box-sizing: border-box;
    padding: 6px;
  }

  & .article {
    background-color: rgba(194, 245, 255, 0.1);
    border-radius: 8px;
    box-sizing: border-box;
    padding: 12px;
    height: 100%;
  }

  & .span {
    color: #d4e8ef;
    word-break: break-all;
  }

  & .title {
    font-size: 17px;
    font-weight: 500;
    color: #c2f5ff;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .detail {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    margin-top: 6px;
  }

  @media (max-width: 660px) {
    & .feature-item {
      width: 50%;
    }
  }

  @media (max-width: 480px) {
    .features .feature-item {
      width: 100%;
    }
  }
`

function App(): JSX.Element {
  return (
    <Container>
      <Svg viewBox="0 0 900 300">
        <use xlinkHref={`${icons}#electron`} />
      </Svg>
      <HeroText>
        You{"'"}ve successfully created an Electron project with React and TypeScript
      </HeroText>
      <HeroTagline>
        Please try pressing <code>F12</code> to open the devTool
      </HeroTagline>

      <Links>
        <div className="link-item">
          <a target="_blank" href="https://electron-vite.org" rel="noopener noreferrer">
            Documentation
          </a>
        </div>
        <div className="link-item link-dot">•</div>
        <div className="link-item">
          <a
            target="_blank"
            href="https://github.com/alex8088/electron-vite"
            rel="noopener noreferrer"
          >
            Getting Help
          </a>
        </div>
        <div className="link-item link-dot">•</div>
        <div className="link-item">
          <a
            target="_blank"
            href="https://github.com/alex8088/quick-start/tree/master/packages/create-electron"
            rel="noopener noreferrer"
          >
            create-electron
          </a>
        </div>
      </Links>

      <Features>
        <div className="feature-item">
          <article>
            <h2 className="title">Configuring</h2>
            <p className="detail">
              Config with <span>electron.vite.config.ts</span> and refer to the{' '}
              <a target="_blank" href="https://electron-vite.org/config" rel="noopener noreferrer">
                config guide
              </a>
              .
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">HMR</h2>
            <p className="detail">
              Edit <span>src/renderer</span> files to test HMR. See{' '}
              <a
                target="_blank"
                href="https://electron-vite.org/guide/hmr.html"
                rel="noopener noreferrer"
              >
                docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">Hot Reloading</h2>
            <p className="detail">
              Run{' '}
              <span>
                {"'"}electron-vite dev --watch{"'"}
              </span>{' '}
              to enable. See{' '}
              <a
                target="_blank"
                href="https://electron-vite.org/guide/hot-reloading.html"
                rel="noopener noreferrer"
              >
                docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">Debugging</h2>
            <p className="detail">
              Check out <span>.vscode/launch.json</span>. See{' '}
              <a
                target="_blank"
                href="https://electron-vite.org/guide/debugging.html"
                rel="noopener noreferrer"
              >
                docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">Source Code Protection</h2>
            <p className="detail">
              Supported via built-in plugin <span>bytecodePlugin</span>. See{' '}
              <a
                target="_blank"
                href="https://electron-vite.org/guide/source-code-protection.html"
                rel="noopener noreferrer"
              >
                docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">Packaging</h2>
            <p className="detail">
              Use{' '}
              <a target="_blank" href="https://www.electron.build" rel="noopener noreferrer">
                electron-builder
              </a>{' '}
              and pre-configured to pack your app.
            </p>
          </article>
        </div>
      </Features>
    </Container>
  )
}

export default App
