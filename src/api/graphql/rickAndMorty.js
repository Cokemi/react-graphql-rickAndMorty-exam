import {gql} from "@apollo/client";

export const FETCH_RICK_AND_MORTY_CHARACTERS = gql`
    query getRickAndMortyCharacters($page: Int!) {
        characters(page: $page, filter: {name: "rick" }) {
            info {
                count
            }
            results {
                name
                gender
                status
                species
                location {
                    name
                }
                origin {
                   name         
                }
                image
                episode {
                    name
                    episode
                }
            }
        }
    }
`;
