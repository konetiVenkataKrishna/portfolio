import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="repo-card-div"
          key={repo.id}
        >
          <div className="container repo-name-div">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center">
                <img
                  src={repo.image_path}
                  alt={repo.alt}
                  className="card-img-top"
                  style={{ width: '330px', height: "180px", textAlign: 'center' }}
                />
              </div>
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
              <p className="repo-description" style={{ color: theme.text }}>
                {repo.description}
              </p>
            </div>
          </div>

          <a href={repo.live_app} target="_blank" rel="noopener noreferrer">
            <button
              className="btn btn-primary"
              style={{
                width: 350,
                height: 40,
                backgroundColor: "black",
                color: "white",
                fontSize: 20,
                borderRadius: 5,
                border: "2px solid black",
              }}
            >
              deployed site
            </button>
          </a>
          <div
            className="d-flex justify-content-around align-items-center"
            style={{ marginTop: 10 }}
          >

            <a href={repo.frontend} target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  width: 170,
                  height: 40,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: 20,
                  borderRadius: 5,
                  border: "2px solid black",
                  marginRight: 3,
                }}
              >
                Frontend git
              </button>
            </a>
            <a href={repo.backend} target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  width: 170,
                  height: 40,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: 20,
                  borderRadius: 5,
                  border: "2px solid black",
                  marginLeft: 3,
                }}
              >
                Backend git
              </button>
            </a>
          </div>
          <ProjectLanguages
            className="repo-languages"
            logos={repo.languages}
          />
        </div>
      </Fade>
    </div>
  );
}
