import { gql } from "@/__generated__/gql";

export const VEHICLES_QUERY = gql(`
  query Vehicles($languageCode: String = "ru") {
    vehicles(lang: $languageCode) {
      id
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`);
