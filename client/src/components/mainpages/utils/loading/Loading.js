import React from "react";
import "./loading.css";

function Loading() {
  return (
    <div>
      Loading ...
      {/* <img
        style={{height: "4rem", width: "4rem"}}
        src="./pics/pjlogo1.jpeg"
        alt="reload"
      /> */}
      <div className="load-page">
        <div className="loader">
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
