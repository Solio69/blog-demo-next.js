// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const testApiData = {
  name: 'Anastatsuya',
  age: 35
}

export default function handler(req, res) {
  res.status(200).json(testApiData)
}
