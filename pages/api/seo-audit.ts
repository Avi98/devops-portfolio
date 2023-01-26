import type { NextApiRequest, NextApiResponse } from "next"

import axios from "axios"

const HUBSPOT_API_KEY = process.env.NEXT_PUBLIC_HUBSPOT_TOKEN
const HUBSPOT_PORTAL_ID = "22662842"
const HUBSPOT_FORM_GUID = "c92ad719-cccc-489a-8186-2de470729053"

type Response = {
  success: boolean
  email?: string
  domain?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { email, domain, pageUri } = req.body

  if (!email || !domain) {
    res.status(400).json({
      success: false,
    })
    return
  }

  try {
    const response = await axios({
      method: "POST",
      url: `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      data: {
        fields: [
          {
            name: "email",
            value: email,
          },
          {
            name: "domain",
            value: domain,
          },
        ],
        context: { pageUri },
      },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "86400",
        Authorization: `Bearer ${HUBSPOT_API_KEY}`,
      },
    })
  } catch (error) {
    return res.status(500).json({ success: false })
  }
  res.status(200).json({
    success: true,
    email,
    domain,
  })
}
