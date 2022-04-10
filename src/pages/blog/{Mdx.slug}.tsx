import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as s from "./postTemplate.module.sass";
import cx from "classnames";
import ShareLinks from "../../components/ShareLinks";
import Layout from "../../components/Layout";

interface PostPageProps {
  mdx: {
    id: string;
    body: string;
    frontmatter: {
      id: string;
      title: string;
      date: string;
      tags: string;
    };
  };
}

const Post = ({
  data: {
    mdx: { id, body, frontmatter },
  },
  location,
}: PageProps<PostPageProps>) => {
  return (
    <Layout location={location}>
      <div className={cx(s.cont, "cont")}>
        <div className={s.post}>
          <div className={s.heading}>
            <h1 className={s.title}>{frontmatter.title}</h1>
            <p> Posted on {frontmatter.date}</p>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
          <div className={s.footer}>
            <ul className={s.tags}>
              {frontmatter.tags.split(",").map((tag) => (
                <li key={tag}> {tag} </li>
              ))}
            </ul>
            <ShareLinks
              title={frontmatter.title}
              url={`https://noelzubin.github.io${frontmatter.slug}`}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;
