/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import BreadcrumbComponent from '../../components/breadcrumb';
import ProductListComponent from '../../components/Product/List';
import SkeletonComponent from '../../components/Skeleton';
import {
    itemDetailSelected,
    fetchDataById,
    fetchDataByName,
    statusSearchDone
} from '../../actions';

const ItemsContainer = ({
    history,
    categories,
    items,
    loading,
    getSelectedItem,
    fetchDataById,
    fetchDataByName,
    searching,
    statusSearchDone,
    isSearching
}) => {
    const dispatchEvents = (id) => {
        getSelectedItem(id);
        fetchDataById(id);
    };

    const handleClickItem = (item) => {
        const { id } = item;
        dispatchEvents(id);
        setTimeout(() => {
            history.push(`/items/${id}`);
        }, 500);
    };

    useEffect(() => {
        if (isSearching) {
            fetchDataByName(searching);
            statusSearchDone();
        }
    }, [isSearching]);

    return (
        <React.Fragment>
            <section className="wrapper__breadcrumb">
                {items.length > 0 && (
                    <BreadcrumbComponent categories={categories} />
                )}
            </section>
            <section>
                <section className="wrapper">
                    <div className="container">
                        <main className="wrapper__content">
                            {loading && <SkeletonComponent />}
                            {!loading && (
                                <React.Fragment>
                                    {items.length > 0 && (
                                        <ProductListComponent
                                            products={items}
                                            handleClickItem={handleClickItem}
                                        />
                                    )}
                                </React.Fragment>
                            )}
                        </main>
                    </div>
                </section>
            </section>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.data.categories,
        items: state.data.items,
        loading: state.data.loading,
        searching: state.data.searching,
        isSearching: state.data.isSearching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSelectedItem: (id) => dispatch(itemDetailSelected(id)),
        fetchDataByName: (searching) => dispatch(fetchDataByName(searching)),
        fetchDataById: (id) => dispatch(fetchDataById(id)),
        statusSearchDone: () => dispatch(statusSearchDone())
    };
};

ItemsContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ItemsContainer));
