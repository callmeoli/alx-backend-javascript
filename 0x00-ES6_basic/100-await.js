export function uploadPhoto() {
    return Promise.resolve({
      status: 200,
      body: 'photo-profile-1',
    });
  } 

  export function createUser() {
    return Promise.resolve({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });
  }
  

async function asyncUploadUser() {
    let photo = null;
    let user = null;
    try {
        photo = await uploadPhoto();
    } catch (error) {
        photo = null;
    }
    try {
        user = await createUser();
    } catch (error) {
        user = null;
    }

    return {
        photo: photo,
        user: user
    }
}


const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
