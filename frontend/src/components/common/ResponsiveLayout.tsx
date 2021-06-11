import styled from 'styled-components';

const ResponsiveLayout = ({children, ...rest}) => {
  return (
    <ResponsiveLayer {...rest}>
        {children}
    </ResponsiveLayer>
    
  )
}

const ResponsiveLayer = styled.div`
  max-width: 1440px;
`
export default ResponsiveLayout
