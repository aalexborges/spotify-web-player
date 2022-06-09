import { useState } from 'react'

import { ClearButton, Container, Form, Input, SearchIcon } from './styles'

import { ReactComponent as XIcon } from '../../assets/svg/x.svg'

const SearchInput = () => {
  const [value, setValue] = useState('')

  return (
    <Container>
      <Form>
        <SearchIcon />

        <Input
          value={value}
          autoFocus
          maxLength={800}
          spellCheck="false"
          autoCorrect="false"
          autoCapitalize="false"
          placeholder="Artistas, músicas ou podcasts"
          onChange={({ target }) => setValue(target.value)}
        />

        {value && (
          <ClearButton type="button" role="button" onClick={() => setValue('')}>
            <XIcon />
          </ClearButton>
        )}
      </Form>
    </Container>
  )
}

export default SearchInput
