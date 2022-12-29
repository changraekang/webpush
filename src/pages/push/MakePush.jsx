import React from "react";
import MakePushBox from "../../component/containers/push/MakePushBox";
import Layout from "../../templates/Layout";

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
