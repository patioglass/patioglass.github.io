import React from 'react';

const MAXPAGE = 10;
export default class Pagenation extends React.Component {
    constructor() {
        super();
        this.state = {
            isMounted: false
        }
    }

    componentDidMount() {
        this.setState({
            isMounted: true
        });
    }

    componentWillUnmount() {
        this.setState({
            isMounted: false
        });
    }

    // ページネーションの更新
    updateShowPage(pageCount) {
        if (this.state.isMounted) {
            this.props.updateShowPage(pageCount);
        }
    }

    render() {
        const { pageCount, showNum, listNum } = this.props;
        // 合計ページ数
        const sumPage = Math.ceil(listNum / showNum);
        const disPagenationPrev = pageCount === 0 ? 'grayMode' : '';
        const disPagenationNext = pageCount === sumPage - 1 ? 'grayMode' : '';

        const currentPage = pageCount;
        // 表示上見えるページナンバー(10ページ分)
        let showLastPageCount = MAXPAGE;
        let showPrevPageCount = 0;
        // 5p目以降は現在ページが真ん中に来るように調整
        if (currentPage > 5) {
            showLastPageCount = currentPage + MAXPAGE / 2;
            showPrevPageCount = currentPage - MAXPAGE / 2;
            if (showLastPageCount > sumPage) {
                showLastPageCount = sumPage;
                showPrevPageCount = currentPage - (MAXPAGE - (showLastPageCount - currentPage));
            }
        }

        const pageNumber = Array(sumPage).fill(0).map((content, index) => {
            if (index >= showPrevPageCount && index < showLastPageCount) {
                return (index === currentPage) 
                    ? <p key={index} class='pagenation__page--active' onClick={() => this.updateShowPage(index)}>{(index + 1).toString().padStart(2, '0')}</p>
                    : <p key={index} onClick={() => this.updateShowPage(index)}>{(index + 1).toString().padStart(2, '0')}</p>;
            }
        })

        return (
            <div class="pagenation pagenation-index">
                {disPagenationPrev ? (
                    <p class={"pager-prev " + disPagenationPrev}>Prev</p>
                ) : (
                    <p class="pager-prev" onClick={() => this.updateShowPage(currentPage - 1)}>Prev</p>
                )}

                {pageNumber}

                {disPagenationNext ? (
                    <p class={"pager-next " + disPagenationNext} rel="next">Next</p>
                ) : (
                    <p class="pager-next" rel="next" onClick={() => this.updateShowPage(currentPage + 1)}>Next</p>
                )}
            </div>
        );
    }
}