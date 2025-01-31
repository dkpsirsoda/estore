import { useDispatch, useSelector } from 'react-redux';
import './_cat-nav.scss';
import { useEffect } from 'react';
import { getCategories } from '../../Redux/Category/action';
import { Link } from 'react-router-dom';
//import categorySlice from '../../Redux/Category/categorySlice';

const CatNav = ()=>{

    const categories = useSelector(state=>state.categoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCategories());
    },[]);

   // console.log(categories);

    return(
        <>
            <div className='cat-nav-container container'>
                <ul>
                    <li className='list-items'>
                        <Link to={"/"}>Home</Link>
                    </li>

                    {
                        categories.map((category)=>{
                            if(category.parent_category_id === null){
                                return(
                                    <li className='list-items'><a href='#'>{category.name}</a></li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default CatNav;