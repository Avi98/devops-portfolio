import { useRouter } from "next/router"
import { FC, SetStateAction, useEffect, useMemo, useState } from "react"

import useAxios from "axios-hooks"

import Button from "@/components/button"
import Grid from "@/components/grid"
import Input from "@/components/input"
import Textarea from "@/components/textarea"
import useInput from "@/utils/use-input"

const ContactForm: FC = () => {
  const { value, reset, bindings } = useInput("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [domain, setDomain] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [pageUri, setPageUri] = useState<string>()
  const router = useRouter()

  const validateEmail = (value: string) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
  }

  const helper = useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      }
    const isValid = validateEmail(value)
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    }
  }, [value])

  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: "/api/contact",
      method: "POST",
      data: { firstname, lastname, email, domain, company, message, pageUri },
    },
    { manual: true }
  )

  useEffect(() => {
    if (data?.success === true && !loading) {
      setFirstname("")
      setLastname("")
      setEmail("")
      setDomain("")
      setCompany("")
      setMessage("")
    }
  }, [data?.success, loading, error])

  useEffect(() => {
    setPageUri(window.location.href)
  })

  return (
    <>
      <Grid.Container gap={1.5} css={{ mt: "4px" }}>
        <Grid xs={6}>
          <Input
            bordered
            borderWeight="light"
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
            bordered
            borderWeight="light"
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
            bordered
            borderWeight="light"
            fullWidth
            clearable
            shadow={false}
            onClearClick={reset}
            status={helper?.color as any}
            color={helper?.color as any}
            helperColor={helper?.color as any}
            helperText={helper?.text as any}
            aria-label="Email"
            type={"email"}
            placeholder={"Email"}
            value={email}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setEmail(e.target.value)
            }
          />
        </Grid>
        <Grid xs={12}>
          <Input
            bordered
            borderWeight="light"
            fullWidth
            aria-label="Domain"
            type={"tel"}
            placeholder={"Domain"}
            value={domain}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setDomain(e.target.value)
            }
          />
        </Grid>
        <Grid xs={12}>
          <Input
            bordered
            borderWeight="light"
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
            bordered
            borderWeight="light"
            minRows={5}
            fullWidth
            aria-label="Message"
            placeholder={"How Can We Help You?"}
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
            flat
            ghost
            borderWeight="light"
            color={"success"}
            type={"submit"}
            disabled={loading}
            onClick={() => refetch()}
          >
            Submit
          </Button>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default ContactForm
