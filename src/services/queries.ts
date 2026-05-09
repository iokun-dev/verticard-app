import { gql } from 'graphql-request';

export const GET_HOMEPAGE = gql`
  query {
  homepage {
    contentTitle

    heroImage {
      url
    }

    sections {
      __typename

      ... on ComponentSharedParagraphSection {
        content
      }
    }
  }
}
`;

export const GET_CONTACT_PAGE = gql`

  query {

    contactPage {

      title

      description

      overlayImage {
        url
      }
    }
  }
`;

export const GET_GALLERY_PAGE = gql`
  query {

  galleryPage {

    title

    description

    galleryItems {

      title

      description

      image {
        url
      }
    }
  }
}
`;

export const GET_GLOBAL_DATA = gql`

  query {

    globalSetting {

      siteTitle

      siteSubtitle

      footerAuthor
    }
  }
`;