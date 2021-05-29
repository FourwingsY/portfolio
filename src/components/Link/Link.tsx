import NextLink, { LinkProps } from "next/link"

/**
 * forcing a tag in <Link>
 */
const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <NextLink {...props}>
      <a>{children}</a>
    </NextLink>
  )
}

export default Link
