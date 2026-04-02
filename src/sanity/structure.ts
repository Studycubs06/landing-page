import { StructureResolver } from 'sanity/desk'
import { 
  HomeIcon,
  BookOpenIcon, 
  BarChart3Icon, 
  MessageCircleIcon, 
  SettingsIcon,
  NewspaperIcon,
  UsersIcon, 
  TagsIcon,
  LayoutIcon,
  FileTextIcon
} from 'lucide-react'


export const structure: StructureResolver = (S) =>
  S.list()
    .title('StudyCubs Dashboard')
    .items([
      // SECTION 1: WEBSITE CONTENT
      S.listItem()
        .title('Site Overview')
        .icon(HomeIcon)
        .child(S.document().schemaType('stat').documentId('site-stats')), // Just an example of a pinned doc or similar
      
      S.divider(),
      
      // GROUP: CORE CONTENT
      S.listItem()
        .title('Courses')
        .icon(BookOpenIcon)
        .child(S.documentTypeList('course').title('All Active Courses')),
      
      S.listItem()
        .title('Success Numbers')
        .icon(BarChart3Icon)
        .child(S.documentTypeList('stat').title('Landing Page Stats')),
      
      S.listItem()
        .title('Testimonials')
        .icon(MessageCircleIcon)
        .child(S.documentTypeList('testimonial').title('Student Reviews')),

      S.divider(),

      // GROUP: BLOG CMS
      S.listItem()
        .title('Blog Articles')
        .icon(NewspaperIcon)
        .child(S.documentTypeList('post').title('All Published Stories')),
      
      S.listItem()
        .title('Authors')
        .icon(UsersIcon)
        .child(S.documentTypeList('author').title('Our Writing Team')),
      
      S.listItem()
        .title('Categories')
        .icon(TagsIcon)
        .child(S.documentTypeList('category').title('Blog Topic Tags')),

      S.divider(),

      // GROUP: LEGAL & POLICIES
      S.listItem()
        .title('Legal Documents')
        .icon(FileTextIcon)
        .child(
          S.documentTypeList('legal')
            .title('Legal Policies & Terms')
        ),

      S.divider(),


      // GROUP: CONFIGURATION
      S.listItem()
        .title('Management')
        .icon(SettingsIcon)
        .child(
          S.list()
            .title('System Configurations')
            .items([
              ...S.documentTypeListItems().filter(
                (listItem) => !['post', 'author', 'category', 'course', 'stat', 'testimonial', 'legal'].includes(listItem.getId() || '')
              ),
            ])
        ),

    ])

