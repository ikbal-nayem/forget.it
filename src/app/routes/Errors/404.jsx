import React from "react";
import { Button } from "@material-ui/core";
import {ReactComponent as NotFoundSVG} from "assets/images/404.svg";


export default function NotFound({history}) {
  return (
    <div className="app-wrapper">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <NotFoundSVG/>
        <h1 className="text-gradient font-weight-bold _heartbeat">Page Not Found!</h1>
        <h4 className="text-muted my-3">
          Sorry, The page you are looking for is not exist.
        </h4>
        <Button
          variant="contained"
          className="bg-gradient w-25 text-white"
          size="small"
          onClick={()=>history.push('/app/home')}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}
