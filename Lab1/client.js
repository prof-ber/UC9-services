async function fetchData() {
  try {
    const response = await fetch("http://172.17.9.106:3000/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data.data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchData();
