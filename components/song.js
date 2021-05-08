import { fetchSign } from '../lib/api'
const fetcher = (...args) => fetch(...args).then(res => res.json())
import useSWR from 'swr'
export default function Song() {
const { data, error } = useSWR('https://cors-anywhere.herokuapp.com/http://signage.krlx.org', fetcher)
return <div>{data?.songs[0].title} by {data?.songs[0].artist}</div>
}
