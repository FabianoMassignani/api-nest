import axios from 'axios';

export async function fetchData(url): Promise<any> {
  const response = await axios.get(url);
  
  return response.data;
}
