import React from 'react'

import { Accordion, ListItem  } from '../../atomic/molecules'

export const Calendars: React.FC = () => {

  return <Accordion text='Criança'>
    <ListItem onPress={() => null} text='Criança'/>
  </Accordion>
}
