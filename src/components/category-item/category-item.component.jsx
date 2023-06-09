import './category-item.styles.scss';

export const CategoryItemComponent = ( { category: { imageUrl, title } }) => {
    // const { imageUrl, title } = category;
    return (
        <div className='category-container'>
            <div className='background-image'
                 style = {
                     {
                         backgroundImage: `url(${imageUrl})`
                     }
                 }
            />

            <div className='category-body-container'>
                <h2>{ title }</h2>
                <p>Shop Now</p>
            </div>

        </div>
    )
}