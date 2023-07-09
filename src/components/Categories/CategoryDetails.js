import React from "react";
import categoriesData from "../../categoriesData";
import { useParams, Navigate } from "react-router-dom";

function CategoryDetails() {
  const { categoryId } = useParams();
  const category = categoriesData.find((category) => category.id == categoryId);
  // const category = categoriesData[0];
  if (!category) {
    <Navigate to="/" />;
  }
  return (
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {category.name}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={category.img}
                  alt="..."
                />
                <p className="mb-4">
                  City : {category.city}
                  <br />
                  Length : {category.length1}Km
                  <br />
                  Rating : {category.rating}
                  <br />
                  Difficulty : {category.difficulty}
                  <br />
                  Details : {category.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryDetails;
