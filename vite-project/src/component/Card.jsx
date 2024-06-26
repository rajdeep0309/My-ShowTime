import React from "react";
import "./css/component.css";
export const Card = () => {
  return (
    <>
    <div class="col-md-4">
      <div class="card p-3 mb-2">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center">
            <div class="icon">
              <i class="bx bxl-dribbble"></i>
            </div>
            <div class="ms-2 c-details">
              <h6 class="mb-0">Dribbble</h6>
              <span>4 days ago</span>
            </div>
          </div>
          <div class="badge">
            <span>Product</span>
          </div>
        </div>
        <div class="mt-5">
          <h3 class="heading">
            Junior Product
            <br />
            Designer-Singapore
          </h3>
          <div class="mt-5">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 50%"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="mt-3">
              <span class="text1">
                42 Applied
                <span class="text2">of 70 capacity</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
