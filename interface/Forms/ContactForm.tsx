import { FC, SetStateAction, useEffect, useState } from "react"
import React from "react"

import useAxios from "axios-hooks"

import { Button, Grid, Input, Mail, Textarea } from "@/components"
import { pulse } from "@/utils/animations"
import useInput from "@/utils/use-input"

const ContactForm: FC = () => {
  const { value, reset, bindings } = useInput("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
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
      url: "/api/contact",
      method: "POST",
      data: { firstname, lastname, email, phone, company, message, pageUri },
    },
    { manual: true }
  )

  useEffect(() => {
    if (data?.success === true && !loading) {
      setFirstname("")
      setLastname("")
      setEmail("")
      setPhone("")
      setCompany("")
      setMessage("")
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
          aria-label="First Name"
          type={"text"}
          placeholder={"First Name"}
          value={firstname}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setFirstname(e.target.value)
          }
        />
      </Grid>
      <Grid xs={6}>
        <Input
          fullWidth
          aria-label="Last Name"
          type={"text"}
          placeholder={"Last Name"}
          value={lastname}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setLastname(e.target.value)
          }
        />
      </Grid>
      <Grid xs={12}>
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
          placeholder="Email Address"
        />
      </Grid>
      <Grid xs={12}>
        <Input
          fullWidth
          aria-label="Phone"
          type={"tel"}
          placeholder={"Phone"}
          value={phone}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setPhone(e.target.value)
          }
        />
      </Grid>
      <Grid xs={12}>
        <Input
          fullWidth
          aria-label="Company"
          type={"text"}
          placeholder={"Company"}
          value={company}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setCompany(e.target.value)
          }
        />
      </Grid>
      <Grid xs={12}>
        <Textarea
          minRows={5}
          fullWidth
          aria-label="Message"
          placeholder={"Message"}
          value={message}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setMessage(e.target.value)
          }
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
export default ContactForm
