/*
 * @author: liuhy
 * @Date: 2021-07-22 13:57:41
 * @LastEditTime: 2021-07-23 16:14:41
 */
import React, { useEffect, useState, useRef } from "react";
import { withRouter, Switch, isBrowser } from "umi";
import { enquireScreen } from "enquire-js";
import { TweenOneGroup } from "rc-tween-one";
import Header from "@/components/Nav/Nav0";
import Footer from "@/components/Footer/Footer0";

// import { Nav00DataSource, Footer00DataSource } from "./data.source.js";

let isMobile;

const animate = {
  enter: { x: "100vw", duration: 1000, ease: "easeInOutCubic" },
  leave: { x: "-30vw", duration: 1000, ease: "easeInOutCubic" },
};

export default withRouter(({ children, location }) => {
  const [mobile, setIsMobile] = useState(isMobile);

  useEffect(() => {
    enquireScreen((b) => {
      setIsMobile(!!b);
    });
  }, []);

  const { pathname } = location;
  const pathArray = pathname.split(".")[0].split("/");
  const path = pathArray[pathArray.length - 1];
  const key = path || "index";
  const enter = key === "index" ? animate.leave : animate.enter;
  const leave = key === "index" ? animate.enter : animate.leave;

  return (
    <div>
      <Header
        isMobile={mobile} />
      <TweenOneGroup
        enter={[
          { type: "set", zIndex: key === "index" ? 0 : 1 },
          { ...enter, type: "from" },
        ]}
        leave={[{ type: "set", zIndex: key === "index" ? 1 : 0 }, leave]}
        appear={false}
        className="app-layout"
      >
        <div key={key} className="layout-anim-child">
          <Switch location={location}>{children.props.children}</Switch>
        </div>
      </TweenOneGroup>
      <Footer
        // dataSource={Footer00DataSource} 
        isMobile={mobile} />
    </div>
  );
});
