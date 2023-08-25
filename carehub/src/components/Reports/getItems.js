import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios";


const GetItems = (props) => {
    const [items, setItems] = useState();
    var userId = JSON.parse(localStorage["userData"])?._id || null;


    const getItems = async (Hid) => {
        try {
            const res = await axios.get(`http://localhost:3000/api/reports/get/${userId}/${Hid}`);
            setItems(res.data.items);
            console.log(res.data.items);
        } catch (error) {
            console.log(error);
        }
    };
    const downloadFile = async (id) => {
        try {
            const res = await axios.get(
                `http://localhost:3000/api/reports/download/${id}`,
                { responseType: "blob" }
            );
            const blob = new Blob([res.data], { type: res.data.type });
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "file.pdf";
            // link.download = res.headers["content-disposition"].split("filename=")[1];
            link.click();
        } catch (error) {
            console.log(error);
        }
    };

    const fileDelete = (id) => {
        const confirm = window.confirm(
            `Are you sure to delete this report?`
        )
        if (!confirm) {
            return;
        }
        axios.delete(`http://localhost:3000/api/reports/delete/${id}`)
            .then(response => {
                alert('Deleted successfully', response);
                getItems();
                // Additional code logic to handle the response
            })
            .catch(error => {
                console.error('Error deleting:', error);
                // Additional code logic to handle any errors
            });
    }
    const previewFile = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/reports/preview/${id}`,
                { responseType: "blob" });
            const blob = new Blob([response.data], { type: response.data.type });
            const blobUrl = URL.createObjectURL(blob);
            window.open(blobUrl, '_blank');

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getItems(props.Hid)
    }, []);
    return (
        <div>
            {items && items.map((item) => (
                <div className="item" key={item._id}>
                    <h4>{item.name}</h4>
                    <button onClick={() => downloadFile(item._id)}>
                        Download File
                    </button>
                    <button onClick={() => fileDelete(item._id)}>
                        delete
                    </button>
                    <button onClick={() => previewFile(item._id)}>
                        Open
                    </button>
                </div>
            ))}
        </div>
    )
}

export default GetItems