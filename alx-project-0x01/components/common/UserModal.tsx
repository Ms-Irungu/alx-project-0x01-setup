import { useState } from 'react'
import { UserData, UserModalProps } from '@/interfaces'
import React from 'react';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        id: 0,
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter email address"
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter phone number"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
                        <input
                            type="url"
                            id="website"
                            name="website"
                            value={user.website}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter website URL"
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <input
                            type="text"
                            id="companyName"
                            name="company.name"
                            value={user.company.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter company name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="companyCatchPhrase" className="block text-gray-700 font-medium mb-2">Company Catchphrase</label>
                        <input
                            type="text"
                            id="companyCatchPhrase"
                            name="company.catchPhrase"
                            value={user.company.catchPhrase}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter company catchphrase"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="companyBs" className="block text-gray-700 font-medium mb-2">Company BS</label>
                        <input
                            type="text"
                            id="companyBs"
                            name="company.bs"
                            value={user.company.bs}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter company BS"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="street" className="block text-gray-700 font-medium mb-2">Street</label>
                        <input
                            type="text"
                            id="street"
                            name="address.street"
                            value={user.address.street}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter street address"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="suite" className="block text-gray-700 font-medium mb-2">Suite</label>
                        <input
                            type="text"
                            id="suite"
                            name="address.suite"
                            value={user.address.suite}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter suite"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                        <input
                            type="text"
                            id="city"
                            name="address.city"
                            value={user.address.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter city"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="zipcode" className="block text-gray-700 font-medium mb-2">Zipcode</label>
                        <input
                            type="text"
                            id="zipcode"
                            name="address.zipcode"
                            value={user.address.zipcode}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter zipcode"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="geoLat" className="block text-gray-700 font-medium mb-2">Geo Latitude</label>
                        <input
                            type="text"
                            id="geoLat"
                            name="address.geo.lat"
                            value={user.address.geo.lat}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter geo latitude"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="geoLng" className="block text-gray-700 font-medium mb-2">Geo Longitude</label>
                        <input
                            type="text"
                            id="geoLng"
                            name="address.geo.lng"
                            value={user.address.geo.lng}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter geo longitude"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserModal