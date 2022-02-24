export interface Aim42 {
  patterns: Pattern[]
}

export interface Pattern {
  title: string
  description: string
}

interface StructuralNode {
  title: string
  titlePlain: string
}

export interface Document extends StructuralNode {}

export interface Section extends StructuralNode {
  slug: string
  id: string
  sectionType: 'section' | 'appendix'
}
