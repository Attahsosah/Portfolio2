import {NextApiRequest,NextApiResponse} from "next";
import {groq} from "next-sanity";
import { sanityClient } from '../../sanity';
// import {PageInfo, Social} from "../../typings";

const query = groq`

   *[_type == "Social"]

`
