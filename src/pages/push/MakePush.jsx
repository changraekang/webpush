<<<<<<< HEAD
import React from "react";
import MakePushBox from "../../component/containers/push/MakePushBox";
import Layout from "../../templates/Layout";
=======
import React from 'react'
import MakePushBox from '../../components/containers/push/MakePushBox'
import Layout from '../../templates/Layout'
>>>>>>> 86247ee92baf11894af748cc2b51079ec4407b96

export default function MakePush() {
  return (
    <Layout>
      <MakePushBox>
        <p>push</p>
      </MakePushBox>
      <MakePushBox>
        <p>push</p>
      </MakePushBox>
      <MakePushBox>
        <p>push</p>
        <p>push</p>
        <p>push</p>
        <p>push</p>
        <p>push</p>
        <p>push</p>
        <p>push</p>
        <p>push</p>
        <p>push</p>
      </MakePushBox>
      <MakePushBox>
        <p>push</p>
        <p>push</p>
      </MakePushBox>
    </Layout>
  );
}
