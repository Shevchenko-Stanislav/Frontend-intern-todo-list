interface IFooterTodoList {
    listLength: number;
}

const FooterTodoList: React.FC<IFooterTodoList> = ({listLength}) => {
    return(
        <>
            {/* Как должны работать остальные кнопки? */}
            <div className="bg-white
                border-[1px] 
                border-solid 
                border-gray-200 
                h-[36px] 
                text-sm 
                flex 
                justify-between 
                items-center 
                text-gray-400
                px-4
                mb-[65px]">
                {listLength} items left
            </div>
        </>
    )
}

export { FooterTodoList }