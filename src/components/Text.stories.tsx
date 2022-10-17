import { Meta, StoryObj} from '@storybook/react'
import { Text,TextProps } from './Text '



export default {
  title: 'Components/Text',
  component: Text,
  args:{
    children:'Loremipsum'
  }
} as Meta<TextProps>

export const Default:StoryObj<TextProps> = {}

export const Smal:StoryObj<TextProps> = {
  args:{
    size: 'sm'
  }
}

export const Large:StoryObj<TextProps> = {
  args:{
    size:'lg'
  }
}

export const CustomComponent:StoryObj<TextProps> = {
  args:{
    asChild:true,
    children:(
      <p>Testing with P tag</p>
    )
  },
  argTypes:{
    children:{
      table:{
        disable:true
      }
    },
    asChild:{
      table:{
        disable:true
      }
    }
  }
}