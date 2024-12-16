import { BackDetailIcon } from '@/assets/icons/Detail'
import { ArrowDownLayoutIcon } from '@/assets/icons/Layout'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

const Select = ({
  data,
  placeholder = 'Seçiniz...',
  selected,
  setSelected,
}) => {
  return (
    <SelectList
      defaultOption={selected}
      setSelected={setSelected}
      data={data}
      arrowicon={<ArrowDownLayoutIcon />}
      boxStyles={{
        backgroundColor: '#D9D9D933',
        borderColor: '#D9D9D9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        paddingLeft: 12,
        paddingRight: 8,
        paddingVertical: 8,
        borderRadius: 8,
        minWidth: 115,
      }}
      dropdownItemStyles={{ backgroundColor: '#333333' }}
      dropdownStyles={{
        backgroundColor: '#333333',
        borderColor: '#D9D9D970',
        position: 'absolute',
        top: 40,
        width: '100%',
        zIndex: 50,
      }}
      dropdownTextStyles={{
        color: 'white',
        fontSize: 12,
        fontFamily: 'Inter_400Regular',
      }}
      inputStyles={{ color: 'white' }}
      search={false}
      placeholder={placeholder}
    />
  )
}

export default Select
