import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 1</MenuItem>
        {/* {data.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelectPlatform(p)}>
            {p.name}
          </MenuItem>
        ))} */}
      </MenuList>
    </Menu>
  )
}

export default SortSelector