/* global fetch */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import style from './style.css';

class AppListPage extends Component {
  constructor (...args) {
    super(...args);
    this.state = {
      apps: []
    };
  }

  componentDidMount () {
    // TODO [todr] move to state
    fetch('/api/apps', {
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(data => this.setState({
        apps: data
      }));
  }

  renderApps () {
    if (!this.state.apps.length) {
      // TODO [adgo] 26.04.2016 - change to real link
      return <h3>No apps do display. Go ahead and <a href='#'>add one</a>!</h3>;
    }

    return this.state.apps.map((app) => {
      // TODO [adgo] 26.04.2016 - remove if statement and (beta)
      if (app === 'wallet') {
        return (<li key={app}>
                  <a target='blank' href={`/${app}/`}>{app} (beta)</a>
                </li>);
      }
    });
  }

  render () {
    const {status} = this.props;
    return (
      <div className={style.normal}>
        <Header
          nodeName={status.name}
          disconnected={status.disconnected}
          noOfErrors={status.noOfErrors}
        />
        <div className='dapp-flex-content'>
          <main className='dapp-content'>
            <div className={'dapp-container'}>
              <h1><span>Installed</span> apps</h1>
              <ul>
              {this.renderApps()}
              </ul>
            </div>
          </main>
        </div>
                <Footer
          version={status.version}
          logging={this.props.logger.logging}
          updateLogging={this.props.actions.updateLogging}
          {...this._test('footer')}
        />
      </div>
    );
  }
}
AppListPage.propTypes = {
  logger: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  status: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return state;
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppListPage);
