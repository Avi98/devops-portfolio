import { useRouter } from "next/router"
import {
  FC,
  Fragment,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react"

import useAxios from "axios-hooks"

import { Button, Grid, Input, Text, Textarea } from "@/components"
import useInput from "@/utils/use-input"

interface Props {
  type:
    | "domain"
    | "email"
    | "phone"
    | "company"
    | "message"
    | "pageUri"
    | "firstname"
    | "lastname"
}

const SeoAuditForm: FC<Props> = ({ type }) => {
  const { value, reset, bindings } = useInput("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [pageUri, setPageUri] = useState<string>()
  const router = useRouter()

  const validateDomain = (value: string) => {
    return value.match(/^[A-Z0-9._%+-]+.[A-Z]{2,4}$/i)
  }

  const validateEmail = (value: string) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
  }

  const helper = useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      }
    if (type === "domain") {
      const isValid = validateDomain(value)
      return {
        text: isValid ? "Correct domain" : "Enter a valid domain",
        color: isValid ? "success" : "error",
      }
    }
    if (type === "email") {
      const isValid = validateEmail(value)
      return {
        text: isValid ? "Correct email" : "Enter a valid email",
        color: isValid ? "success" : "error",
      }
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

  const handlePortfolio = () => {
    router.push("/portfolio")
  }

  return (
    <>
      {!data?.success ? (
        <Grid.Container gap={1.5} css={{ mt: "4px" }}>
          <Grid xs={6}>
            <Input
              bordered
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
              fullWidth
              clearable
              shadow={false}
              onClearClick={reset}
              status={helper?.color}
              color={helper?.color}
              helperColor={helper?.color}
              helperText={helper?.text}
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
              bordered
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
              flat
              ghost
              color={"success"}
              type={"submit"}
              disabled={loading}
              onClick={() => refetch()}
            >
              Submit
            </Button>
          </Grid>
        </Grid.Container>
      ) : (
        <Fragment>
          <Grid.Container css={{ mt: "$10" }}>
            <Grid xs={12}>
              <Text>
                Thank you for your interest in our services. We will be in touch
                shortly.
              </Text>
              <Button color="success" auto onClick={handlePortfolio}>
                Portfolio
              </Button>
            </Grid>
          </Grid.Container>
        </Fragment>
      )}
    </>
  )
}

export default SeoAuditForm
