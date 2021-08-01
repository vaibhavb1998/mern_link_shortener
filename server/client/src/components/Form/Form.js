import React, { useState, useEffect } from "react";
import axios from "axios";
import "./form.css";
import config from "../../config";

const Form = () => {
  const [isUrlVisible, setIsUrlVisible] = useState(false);
  const [formValues, setFormValues] = useState({ url: "", name: "" });
  const [shortUrl, setShortUrl] = useState("");

  const currentPath = window.location.href;

  useEffect(() => {
    const path = currentPath.split("/")[3];

    if (path && path !== "page-not-found") {
      axios
        .get(`/api/url/redirect/${path}`)
        .then((res) => {
          const { url } = res.data;
          window.location.replace(url);
        })
        .catch((err) => {
          const { statusText } = err.response;
          if (statusText === "Not Found") {
            window.location.replace("/page-not-found");
          }
        });
    }
  }, [currentPath]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { url, name } = formValues;

    axios
      .post(`/api/url/generate`, {
        ...(name ? { name } : {}),
        url,
      })
      .then((res) => {
        setIsUrlVisible(true);
        const name = res.data.name;
        setShortUrl(`${config.SERVER_URI}/${name}`);

        // setShortUrl(`http://localhost:3000/${name}`);
      })
      .catch((err) => {
        alert("Name is already in use!!!");
      });
  };

  return (
    <section className="link-shorten-area" id="link-shorten-area">
      <h3 className="link-shorten-area-heading">
        Create your shorten brand link
      </h3>
      <div className="heading-underline" />

      <form className="text-center" onSubmit={handleSubmit}>
        <input
          type="url"
          className="larger-link shadow-lg"
          name="larger-link"
          id=""
          placeholder="Paste your link here (Eg: https://www.google.com)"
          spellCheck="false"
          required
          value={formValues.url}
          onChange={(e) =>
            setFormValues({ ...formValues, url: e.target.value })
          }
        />
        <input
          type="text"
          v-model="name"
          className="larger-link shadow-lg"
          name="larger-link"
          minLength="3"
          maxlength="10"
          id=""
          placeholder="Write a custom name... (Optional)"
          spellcheck="false"
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
        />
        <br />
        <br />
        <input type="submit" value="Create" />
      </form>

      {isUrlVisible && (
        <div id="shorten-link-area" className="shorten-link-area">
          <h4
            v-if="success"
            id="shorten-link"
            className="shorten-link animated zoomInUp slow"
            style={{ display: "block" }}
          >
            <a href={shortUrl} target="_blank" rel="noreferrer">
              {shortUrl}
            </a>

            <div className="text-center">
              <div
                className="new-link-btn mt-5"
                onClick={() => {
                  setFormValues({ url: "", name: "" });
                  setIsUrlVisible(false);
                  setShortUrl("");
                }}
              >
                Create another
              </div>
            </div>
          </h4>
        </div>
      )}
    </section>
  );
};

export default Form;
