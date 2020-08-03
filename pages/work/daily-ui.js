import React from "react";
import Link from "next/link";

export default function pid() {
  return (
    <div className="page-wrapper">
      <div className="work-header">
        <Link href="/">
          <a className="back-btn">Home</a>
        </Link>
        <h2 className="work-title">Daily UI</h2>
        <span className="work-des">
          Here are some shots from the Daily UI challenge
        </span>
      </div>
      <div className="work-content">
          content go brrrrr
      </div>
    </div>
  );
}
