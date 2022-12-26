import Image from "next/image"
import { FC, Suspense } from "react"

import clsx from "clsx"

import { CSS } from "@/theme/stitches.config"

import {
  StyledSummaryItem,
  StyledSummaryItemDescription,
  StyledSummaryItemIcon,
  StyledSummaryItemTitle,
  SummaryListProps,
} from "./summary.styles"

interface Props {
  id: string
  title: string
  subtitle: string
  icon?: string
}

type SummaryItemProps = Props & SummaryListProps & { css?: CSS }

const SummaryItem: FC<SummaryItemProps> = ({ title, subtitle, icon, css }) => {
  return (
    <StyledSummaryItem className={clsx("summary-item")} css={css}>
      <StyledSummaryItemIcon className={clsx("summary-item__icon")}>
        <Suspense>
          <Image alt={title} height={42} src={`${icon}`} width={42} />
        </Suspense>
      </StyledSummaryItemIcon>
      <StyledSummaryItemTitle className={clsx("summary-item__title")}>
        {title}
      </StyledSummaryItemTitle>
      <StyledSummaryItemDescription
        className={clsx("summary-item__description")}
      >
        {subtitle}
      </StyledSummaryItemDescription>
    </StyledSummaryItem>
  )
}

export default SummaryItem
