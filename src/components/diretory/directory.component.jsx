import { CategoryItemComponent } from "../category-item/category-item.component";

import './directory.styles.scss'

export const DirectoryComponent = ({categories}) => {
    return (
        <div className='directory-container'>
            {
                categories.map((category) =>
                    <CategoryItemComponent key={category.id} category={ category }/>
                )
            }
        </div>
    )
}