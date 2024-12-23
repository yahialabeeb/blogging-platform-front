'use client';

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import styled from 'styled-components';

const UploadZoneWrapper = styled.div`
  border: 2px dashed #3b82f6;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 1rem;
  background-color: ${({ isDragActive }) =>
    isDragActive ? '#eff6ff' : '#ffffff'};

  &:hover {
    background-color: #eff6ff;
  }
`;

const UploadInfo = styled.p`
  margin-top: 1rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

const UploadedImage = styled.img`
  margin-top: 1rem;
  max-width: 100%;
  border-radius: 8px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Error = styled.p`
  color: red;
  font-size: 0.9em;
  margin: -8px 0 12px 0;
`;

const UploadZone = ({ uploadUrl, onSuccess, error, label }) => {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const onDrop = async (acceptedFiles) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      setUploading(true);
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error(response.statusText);
      const { fileUrl } = (await response.json()).data;
      setImageUrl(fileUrl);
      if (onSuccess) onSuccess(fileUrl);
      toast.success('The image has been uploaded.');
    } catch (error) {
      console.error('Upload failed:', error);
      toast.error('Failed to upload the image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });
  return (
    <div>
      <Label>{label}</Label>
      <UploadZoneWrapper
        {...getRootProps()}
        isDragActive
      >
        <input {...getInputProps()} />
        {uploading ? (
          <p>Uploading...</p>
        ) : (
          <p>
            {isDragActive
              ? 'Drop the image here...'
              : 'Drag & drop an image or click to select'}
          </p>
        )}
        <UploadInfo>Only images are allowed. Max size: 5MB</UploadInfo>
      </UploadZoneWrapper>

      {imageUrl && (
        <UploadedImage
          src={imageUrl}
          alt='Uploaded preview'
        />
      )}
      {error && <Error>{error}</Error>}
    </div>
  );
};

export default UploadZone;
