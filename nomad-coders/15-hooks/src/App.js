import React from 'react';
import UseState from './hooks/UseState';
import UseInput from './hooks/UseInput';
import UseTabs from './hooks/UseTabs';
import UseEffect from './hooks/UseEffect';
import UseTitle from './hooks/UseTitle';
import UseClick from './hooks/UseClick';
import UseConfirm from './hooks/UseConfirm';
import UsePreventLeave from './hooks/UsePreventLeave';
import UseBeforeLeave from './hooks/UseBeforeLeave';
import UseFadeIn from './hooks/UseFadeIn';
import UseNetwork from './hooks/UseNetwork';
import UseScroll from './hooks/UseScroll';
import UseFullscreen from './hooks/UseFullscreen';
import UseNotification from './hooks/UseNotification';
import UseAxios from './hooks/UseAxios';

const App = () => {
  return (
    <div>
      <h2>[ UseState ]</h2>
      <UseState />
      <br />
      <br />
      <h2>[ UseInput ]</h2>
      <UseInput />
      <br />
      <br />
      <h2>[ UseTaps ]</h2>
      <UseTabs />
      <br />
      <br />
      <h2>[ UseEffect ]</h2>
      <UseEffect />
      <br />
      <br />
      <h2>[ UseTitle ]</h2>
      <UseTitle />
      <br />
      <br />
      <h2>[ UseClick ]</h2>
      <UseClick />
      <br />
      <br />
      <h2>[ UseConfirm ]</h2>
      <UseConfirm />
      <br />
      <br />
      <h2>[ UsePreventLeave ]</h2>
      <UsePreventLeave />
      <br />
      <br />
      <h2>[ UseBeforeLeave ]</h2>
      <UseBeforeLeave />
      <br />
      <br />
      <h2>[ UseFadeIn ]</h2>
      <UseFadeIn />
      <br />
      <br />
      <h2>[ UseNetwork ]</h2>
      <UseNetwork />
      <br />
      <br />
      <div
        style={{
          position: 'fixed',
          top: '20%',
          left: '50%',
        }}
      >
        <h2>[ UseScroll ]</h2>
        <UseScroll />
      </div>
      <br />
      <br />
      <h2>[ UseFullscreen ]</h2>
      <UseFullscreen />
      <br />
      <br />
      <h2>[ UseNotification ]</h2>
      <UseNotification />
      <br />
      <br />
      <h2>[ UseAxios ]</h2>
      <UseAxios />
    </div>
  );
};

export default App;
