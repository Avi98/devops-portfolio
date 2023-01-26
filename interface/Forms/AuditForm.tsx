import { FC, SetStateAction, useEffect, useState } from "react"
import React from "react"

import useAxios from "axios-hooks"

import Button from "@/components/button"
import Grid from "@/components/grid"
import Input from "@/components/input"
import { pulse } from "@/utils/animations"
import useInput from "@/utils/use-input"

const AuditForm: FC = () => {
  const { value, reset, bindings } = useInput("")
  const [domain, setDomain] = useState("")
  const [email, setEmail] = useState("")
  const [pageUri, setPageUri] = useState<string>()

  const validateEmail = (value: string) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
  }

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      }
    const isValid = validateEmail(value)
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "default" : "error",
    }
  }, [value])
  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: "/api/seo-audit",
      method: "POST",
      data: { domain, email, pageUri },
    },
    { manual: true }
  )

  useEffect(() => {
    if (data?.success === true && !loading) {
      setDomain("")
      setEmail("")
    }
  }, [data?.success, loading, error])

  useEffect(() => {
    setPageUri(window.location.href)
  })

  return (
    <Grid.Container gap={1.5} css={{ mt: "4px" }}>
      <Grid xs={6}>
        <Input
          fullWidth
          aria-label="Domain Name"
          type={"text"}
          placeholder={"Your Websites URL"}
          value={domain}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setDomain(e.target.value)
          }
        />
      </Grid>
      <Grid xs={6}>
        <Input
          {...bindings}
          clearable
          fullWidth
          shadow={false}
          onClearClick={reset}
          status={helper.color as any}
          color={helper.color as any}
          helperColor={helper.color as any}
          helperText={helper.text as any}
          type="email"
          placeholder="Company Email"
        />
      </Grid>
      <Grid xs={12} sm={12} md={12}>
        <Button
          aria-label="Submit"
          auto
          type={"submit"}
          disabled={loading}
          onClick={() => refetch()}
          css={{
            bg: "rgba(51, 51,51,0.6)",
            "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":
              {
                bf: "saturate(180%) blur(14px)",
              },
            color: "$text",
            maxH: "38px",
            px: "$8",
            width: "100%",

            "& .devui-button-icon": {
              mr: "0px",
              marginRight: "6px",
            },
            "& .devui-button-icon svg": {
              transition: "$default",
            },
            "&:hover": {
              "& .devui-button-icon svg": {
                animation: `${pulse} 1s infinite`,
              },
            },
          }}
        >
          Request SEO Audit
        </Button>
      </Grid>
    </Grid.Container>
  )
}
export default AuditForm
