import { Data } from '../../pages/api/snapshot';

export async function fetchSnapshot(): Promise<Data> {
  const response = await fetch('/api/snapshot', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await response.json()

  return result
}

export type { Data };
