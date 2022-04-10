import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Main from "../components/Portfolio/Main";
import Posts from "../components/posts";
import * as s from "./index.module.sass";

type DataProps = {
  allMdx: {
    edges: [
      {
        node: {
          id: string;
          frontmatter: {
            id: number;
            title: string;
            tags: string;
            date: string;
            slug: string;
          };
        };
      }
    ];
  };
};

const IndexRoute = ({
  data: {
    allMdx: { edges },
  },
  location,
}: PageProps<DataProps>) => {
  return (
    <Layout location={location}>
      <div className="cont">
        <Main />
        <Posts posts={edges} />
      </div>
    </Layout>
  );
};

export default IndexRoute;

export const query = graphql`
  {
    allMdx(sort: { fields: [frontmatter___id], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            id
            date
            slug
          }
        }
      }
    }
  }
`;
