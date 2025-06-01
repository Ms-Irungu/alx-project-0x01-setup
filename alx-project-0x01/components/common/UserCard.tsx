import React from 'react'
import { UserProps } from '@/interfaces'

const UserCard: React.FC<UserProps> = ({
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company
}) => {
    return (
        <div className="max-w-xl mx-auto my-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-blue-700">{name}</h2>
                <p className="text-sm text-gray-500">@{username}</p>
                <p className="text-xs text-gray-700">User ID: {id}</p>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Email:</span>{' '}
                <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Phone:</span>{' '}
                <a href={`tel:${phone}`} className="text-blue-600 hover:underline">{phone}</a>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Website:</span>{' '}
                <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{website}</a>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Address:</span>{' '}
                <span>
                    {address.street}, {address.suite}, {address.city}, {address.zipcode}, {'{'}
                    {address.geo.lat}, {address.geo.lng}
                    {'}'}
                </span>
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-700">Company:</span>{' '}
                <span>
                    <span className="font-bold">{company.name}</span>
                    <span className="block italic text-gray-800">Catchphrase: &quot;{company.catchPhrase}&quot;</span>
                    <span className="block italic text-gray-600">Business: {company.bs}</span>
                </span>
            </div>
        </div>
    )
}

export default UserCard;